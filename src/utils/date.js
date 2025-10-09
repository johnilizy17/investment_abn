export function removeYearFromISO(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

export function daysUntil(startDate, endDate) {
  const now = new Date(endDate);
  const start = new Date(startDate);

  // difference in milliseconds
  const diffMs = start - now;

  if (diffMs < 0) {
    return 0 + " day"; // already started
  }

  const day = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  // convert ms to days
  return day > 1 ? day + " days" : day + " day";
}

export function startCountdown(targetDate, setTargetDate) {
  const interval = setInterval(() => {
    const now = new Date();
    const remaining = diffTime(now, targetDate);

    setTargetDate(remaining)

    if (remaining === "00:00:00") {
      clearInterval(interval); // stop timer
    }
  
  }, 1000);
}

export function diffTime(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let diffMs = end - start; // difference in ms
  if (diffMs < 0) diffMs = 0; // avoid negative time

  const hours = String(Math.floor(diffMs / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((diffMs % (1000 * 60)) / 1000)).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

export function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now - past; // difference in milliseconds

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} sec${seconds > 1 ? "s" : ""} ago`;
  }
}

export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric' // Added year
  });
}