// Format movie runtime
export const formatRuntime = (runtime) => {
if (!runtime || runtime === 'N/A') return 'N/A';
const minutes = parseInt(runtime);
if (isNaN(minutes)) return runtime;
const hours = Math.floor(minutes / 60);
const mins = minutes % 60;
return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};
// Format number with commas
export const formatNumber = (num) => {
if (!num) return '0';
return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// Get rating color
export const getRatingColor = (rating) => {
const score = parseFloat(rating);
if (isNaN(score)) return 'text-gray-500';
if (score >= 8) return 'text-green-500';
if (score >= 6) return 'text-yellow-500';
return 'text-red-500';
};
// Truncate text
export const truncate = (text, length = 150) => {
if (!text || text.length <= length) return text;
return text.substring(0, length) + '...';
};
// Check if image URL is valid
export const isValidImageUrl = (url) => {
return url && url !== 'N/A' && !url.includes('undefined');
};
// Get poster URL or placeholder
export const getPosterUrl = (url) => {
return isValidImageUrl(url) 
? url 

    : 'https://via.placeholder.com/300x450?text=No+Image';
};