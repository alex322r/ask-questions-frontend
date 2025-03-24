
export default function calculateTime (createdDate) {

    const date = new Date(createdDate);
    const now = new Date();
    const diff = now.getTime() - date.getTime();


    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    
    
    if (years > 0) {
      return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'}`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'min' : 'mins'}`;
    } else {
      return `${seconds} ${seconds === 1 ? 'secs' : 'secs'}`;
    }
  }