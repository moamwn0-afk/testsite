# Tutor LMS API Integration

This document explains the integration of WordPress Tutor LMS REST API with this React application.

## Overview

The application now fetches real courses from your WordPress Tutor LMS installation at `https://abkadrow.online` and displays them on the landing page.

## Features

✅ **Fetch Real Courses**: Automatically loads courses from your Tutor LMS REST API
✅ **Display Course Information**: Shows course title, price, instructor, lessons count, etc.
✅ **Redirect to Original Site**: Clicking on any course opens it on your WordPress site
✅ **Loading States**: Shows loading spinner while fetching data
✅ **Error Handling**: Gracefully handles API errors with retry option
✅ **Responsive Design**: Works on all screen sizes

## Files Modified/Created

### Created Files:
1. **`src/services/tutorApi.ts`** - API service for Tutor LMS integration
   - `fetchCourses()` - Fetches courses from the API
   - `getCourseUrl()` - Returns the course URL on original site
   - `formatCoursePrice()` - Formats course price in Arabic
   - `stripHtml()` - Removes HTML tags from text

2. **`.env.example`** - Example environment configuration
3. **`TUTOR_API_INTEGRATION.md`** - This documentation file

### Modified Files:
1. **`src/components/LatestCourses.tsx`** - Updated to use real API data
2. **`.gitignore`** - Added .env files to protect API credentials

## How It Works

### 1. API Authentication
The application uses WordPress Application Passwords for authentication:
- **API Key**: `key_192539345d74a9bdef67a8afa3521ac9`
- **API Secret**: `secret_3b6117505d07762b3151969bbf17970261ed340c5577ad67b23091ddd803405a`

Authentication is done via Basic Auth header:
```typescript
const authHeader = 'Basic ' + btoa(`${API_KEY}:${API_SECRET}`);
```

### 2. Fetching Courses
The `LatestCourses` component:
1. Calls `fetchCourses()` on component mount
2. Displays loading spinner while fetching
3. Shows courses in a responsive grid
4. Handles errors with retry option

### 3. Course Redirection
When a user clicks on a course:
- Opens the course URL in a new tab
- Redirects to: `course.link` or `https://abkadrow.online/courses/{id}`

### 4. View All Courses
The "عرض الكل" (View All) button redirects to: `https://abkadrow.online/courses`

## API Endpoints Used

### Get Courses
```
GET https://abkadrow.online/wp-json/tutor/v1/courses
```

**Parameters:**
- `page` - Page number (default: 1)
- `per_page` - Number of courses per page (default: 10)

**Response:** Array of course objects

## Course Data Structure

```typescript
interface TutorCourse {
  id: number;
  title: { rendered: string };
  link: string;
  course_thumbnail?: string;
  author_name?: string;
  tutor_course_price_type?: string;
  tutor_course_regular_price?: string;
  tutor_course_sale_price?: string;
  course_level?: string;
  total_lessons?: number;
  total_quizzes?: number;
  total_assignments?: number;
  total_enrolled?: number;
}
```

## Testing the Integration

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open the application in your browser**

3. **Check the "أحدث الكورسات في المنصة" section**

4. **You should see:**
   - Loading spinner initially
   - Real courses from your WordPress site
   - Course cards with images, titles, and prices
   - Click any course to open it on your WordPress site

## Troubleshooting

### No courses showing?
1. Check browser console for errors
2. Verify API credentials are correct
3. Ensure your WordPress site is accessible
4. Check if Tutor LMS REST API is enabled

### CORS errors?
If you see CORS errors, you may need to add CORS headers to your WordPress site:

```php
// Add to your WordPress theme's functions.php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

### Images not loading?
The application has fallback images if course thumbnails are not available.

## Security Notes

⚠️ **API Credentials**: The API credentials are currently hardcoded in `tutorApi.ts`. For better security:
1. Use environment variables (`.env` file)
2. Never commit `.env` file to version control
3. Use different credentials for development and production

## Future Enhancements

Possible improvements:
- Add pagination for browsing more courses
- Add search and filtering
- Show course reviews and ratings
- Cache API responses for better performance
- Add course categories filter
- Implement course wishlist functionality

## Support

For Tutor LMS API documentation, visit:
- [Tutor LMS REST API Documentation](https://docs.themeum.com/tutor-lms/developer-documentation/rest-api)
- [WordPress REST API Authentication](https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/)

---

**Last Updated**: $(date)
**API Version**: Tutor LMS v2.2.1+
**WordPress Site**: https://abkadrow.online