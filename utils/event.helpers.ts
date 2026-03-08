// utils/event.helpers.ts

// generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")   // remove special chars
    .replace(/\s+/g, "-")           // replace spaces with -
    .replace(/-+/g, "-");           // remove duplicate -
};


// normalize date to YYYY-MM-DD
export const normalizeDate = (date: string): string => {
  const d = new Date(date);

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};


// normalize time to HH:mm (24 hour format)
export const normalizeTime = (time: string): string => {
  const d = new Date(`1970-01-01T${time}`);

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};