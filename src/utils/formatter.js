export const formatDate = (date) => {
  if (date === null || date === undefined) {
    return "-";
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export const formatElapsedTime = (timestamp) => {
  const currentTimestamp = Date.now();
  const targetTimestamp = new Date(timestamp).getTime();
  const elapsedMilliseconds = currentTimestamp - targetTimestamp;
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);
  const elapsedWeeks = Math.floor(elapsedDays / 7);
  const elapsedMonths = Math.floor(elapsedDays / 30);

  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} detik yang lalu`;
  } else if (elapsedMinutes < 60) {
    return `${elapsedMinutes} menit yang lalu`;
  } else if (elapsedHours < 24) {
    return `${elapsedHours} jam yang lalu`;
  } else if (elapsedDays < 7) {
    return `${elapsedDays} hari yang lalu`;
  } else if (elapsedWeeks < 4) {
    return `${elapsedWeeks} minggu yang lalu`;
  } else {
    return `${elapsedMonths} bulan yang lalu`;
  }
};
