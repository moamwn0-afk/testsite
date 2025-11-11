const TUTOR_API_BASE_URL = 'https://abkadrow.online/wp-json/tutor/v1';
const API_KEY = 'key_192539345d74a9bdef67a8afa3521ac9';
const API_SECRET = 'secret_3b6117505d07762b3151969bbf17970261ed340c5577ad67b23091ddd803405a';

// Create Basic Auth header (API Key as username, Secret as password)
// This matches Tutor LMS REST API authentication method
const authHeader = 'Basic ' + btoa(`${API_KEY}:${API_SECRET}`);

// Tutor LMS API returns courses in WordPress post format
// This interface handles both REST API and native WordPress formats
export interface TutorCourse {
  // ID fields (either format)
  id?: number;
  ID?: number;
  
  // Title fields (multiple formats supported)
  title?: {
    rendered?: string;
  } | string;
  post_title?: string;
  
  // Content fields
  excerpt?: {
    rendered?: string;
  } | string;
  post_excerpt?: string;
  
  content?: {
    rendered?: string;
  } | string;
  post_content?: string;
  
  // URL/Link
  link?: string;
  guid?: string;
  
  // Media
  featured_media?: number;
  course_thumbnail?: string;
  featured_image_url?: string;
  
  // Author info
  author?: number;
  post_author?: number;
  author_name?: string;
  
  // Taxonomies
  categories?: number[];
  category_terms?: any[];
  tags?: number[];
  tag_terms?: any[];
  
  // Tutor LMS specific fields
  tutor_course_price_type?: string;
  tutor_course_regular_price?: string;
  tutor_course_sale_price?: string;
  price?: string;
  regular_price?: string;
  sale_price?: string;
  is_free?: boolean;
  
  total_enrolled?: number;
  enrolled?: number;
  
  course_duration?: string;
  duration?: string;
  
  course_level?: string;
  difficulty_level?: string;
  level?: string;
  
  lessons_count?: number;
  total_lessons?: number;
  lesson_count?: number;
  
  total_quizzes?: number;
  quiz_count?: number;
  
  total_assignments?: number;
  assignment_count?: number;
  
  // Ratings
  rating?: {
    rating_count?: number;
    rating_avg?: number;
  };
  course_rating?: any;
  
  // Dates
  date?: string;
  post_date?: string;
  modified?: string;
  post_modified?: string;
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
    
    // Handle different response formats from Tutor LMS API
    
    // Format 1: Direct array of courses
    if (Array.isArray(data)) {
      return {
        courses: data,
        total: data.length,
        total_pages: 1,
      };
    } 
    
    // Format 2: Wrapped in data.posts (Tutor LMS v2.x standard format)
    if (data.data && data.data.posts && Array.isArray(data.data.posts)) {
      console.log('First course structure:', data.data.posts[0]);
      return {
        courses: data.data.posts,
        total: data.data.total_course || data.data.posts.length,
        total_pages: data.data.total_page || 1,
      };
    }
    
    // Format 3: Wrapped in data property as array
    if (data.data && Array.isArray(data.data)) {
      return {
        courses: data.data,
        total: data.total || data.data.length,
        total_pages: data.total_pages || 1,
      };
    } 
    
    // Format 4: Direct courses property
    if (data.courses) {
      return data;
    } 
    
    // Unknown format
    console.warn('Unexpected API response format:', data);
    return {
      courses: [],
      total: 0,
      total_pages: 0,
    };
  } catch (error) {
    console.error('Error fetching courses from Tutor LMS:', error);
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('فشل الاتصال بالخادم. قد تكون هناك مشكلة في CORS أو الاتصال بالإنترنت.');
    }
    throw error;
  }
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

/**
 * Get course ID from different API response formats
 * @param course - Course object
 * @returns Course ID as number
 */
export const getCourseId = (course: any): number => {
  return course.id || course.ID || 0;
};

/**
 * Get course title from different API response formats
 * @param course - Course object
 * @returns Course title as string
 */
export const getCourseTitle = (course: any): string => {
  // Format 1: title.rendered (WordPress REST API standard)
  if (course.title && typeof course.title === 'object' && course.title.rendered) {
    return course.title.rendered;
  }
  
  // Format 2: title as string
  if (typeof course.title === 'string') {
    return course.title;
  }
  
  // Format 3: post_title (WordPress post object)
  if (course.post_title) {
    return course.post_title;
  }
  
  // Format 4: name
  if (course.name) {
    return course.name;
  }
  
  return 'Untitled Course';
};

/**
 * Get course link/URL from different API response formats
 * @param course - Course object
 * @returns Course URL as string
 */
export const getCourseLink = (course: any): string => {
  if (course.link) return course.link;
  if (course.guid) return course.guid;
  
  const id = getCourseId(course);
  return `https://abkadrow.online/courses/${id}`;
};

/**
 * Get course thumbnail from different API response formats
 * @param course - Course object
 * @returns Thumbnail URL or default image
 */
export const getCourseThumbnail = (course: any): string => {
  if (course.course_thumbnail) return course.course_thumbnail;
  if (course.featured_image_url) return course.featured_image_url;
  
  // Default fallback image
  return "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop";
};

/**
 * Get course level from different API response formats
 * @param course - Course object
 * @returns Course level as string
 */
export const getCourseLevel = (course: any): string | undefined => {
  return course.course_level || course.difficulty_level || course.level;
};

/**
 * Get author name from different API response formats
 * @param course - Course object
 * @returns Author name or undefined
 */
export const getAuthorName = (course: any): string | undefined => {
  return course.author_name;
};

/**
 * Get total enrolled students from different API response formats
 * @param course - Course object
 * @returns Number of enrolled students
 */
export const getTotalEnrolled = (course: any): number => {
  return course.total_enrolled || course.enrolled || 0;
};

/**
 * Get total lessons from different API response formats
 * @param course - Course object
 * @returns Number of lessons
 */
export const getTotalLessons = (course: any): number => {
  return course.total_lessons || course.lessons_count || course.lesson_count || 0;
};

/**
 * Get total quizzes from different API response formats
 * @param course - Course object
 * @returns Number of quizzes
 */
export const getTotalQuizzes = (course: any): number => {
  return course.total_quizzes || course.quiz_count || 0;
};

/**
 * Get total assignments from different API response formats
 * @param course - Course object
 * @returns Number of assignments
 */
export const getTotalAssignments = (course: any): number => {
  return course.total_assignments || course.assignment_count || 0;
};