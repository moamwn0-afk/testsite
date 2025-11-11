const TUTOR_API_BASE_URL = 'https://abkadrow.online/wp-json/tutor/v1';
const API_KEY = 'key_192539345d74a9bdef67a8afa3521ac9';
const API_SECRET = 'secret_3b6117505d07762b3151969bbf17970261ed340c5577ad67b23091ddd803405a';

// Create Basic Auth header (API Key as username, Secret as password)
// This matches Tutor LMS REST API authentication method
const authHeader = 'Basic ' + btoa(`${API_KEY}:${API_SECRET}`);

export interface TutorCourse {
  id: number;
  title: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  link: string;
  featured_media?: number;
  author?: number;
  categories?: number[];
  tutor_course_price_type?: string;
  tutor_course_regular_price?: string;
  tutor_course_sale_price?: string;
  course_thumbnail?: string;
  author_name?: string;
  total_enrolled?: number;
  course_duration?: string;
  course_level?: string;
  lessons_count?: number;
  total_lessons?: number;
  total_quizzes?: number;
  total_assignments?: number;
}

export interface TutorApiResponse {
  courses: TutorCourse[];
  total: number;
  total_pages: number;
}

/**
 * Fetch courses from Tutor LMS API
 * @param page - Page number (default: 1)
 * @param perPage - Number of courses per page (default: 10)
 * @returns Promise with courses data
 */
export const fetchCourses = async (
  page: number = 1,
  perPage: number = 10
): Promise<TutorApiResponse> => {
  const url = `${TUTOR_API_BASE_URL}/courses?paged=${page}`;
  
  console.log('Fetching courses from:', url);
  console.log('Using authentication:', authHeader.substring(0, 20) + '...');
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
      credentials: 'omit',
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    console.log('API Response data:', data);
    
    // Handle different response formats
    // Tutor LMS returns an array of courses directly
    if (Array.isArray(data)) {
      return {
        courses: data,
        total: data.length,
        total_pages: 1,
      };
    } else if (data.data && Array.isArray(data.data)) {
      // Handle if wrapped in data property
      return {
        courses: data.data,
        total: data.total || data.data.length,
        total_pages: data.total_pages || 1,
      };
    } else if (data.courses) {
      return data;
    } else {
      console.warn('Unexpected API response format:', data);
      return {
        courses: [],
        total: 0,
        total_pages: 0,
      };
    }
  } catch (error) {
    console.error('Error fetching courses from Tutor LMS:', error);
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('فشل الاتصال بالخادم. قد تكون هناك مشكلة في CORS أو الاتصال بالإنترنت.');
    }
    throw error;
  }
};

/**
 * Get the course URL to redirect users to the original site
 * @param courseId - The course ID
 * @returns The full course URL
 */
export const getCourseUrl = (course: TutorCourse): string => {
  return course.link || `https://abkadrow.online/courses/${course.id}`;
};

/**
 * Format course price
 * @param course - The course object
 * @returns Formatted price string
 */
export const formatCoursePrice = (course: TutorCourse): string => {
  if (course.tutor_course_price_type === 'free') {
    return 'مجاني';
  }
  
  const price = course.tutor_course_sale_price || course.tutor_course_regular_price;
  
  if (price) {
    return `${price} جنيه`;
  }
  
  return 'مجاني';
};

/**
 * Strip HTML tags from string
 * @param html - HTML string
 * @returns Plain text
 */
export const stripHtml = (html: string): string => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};