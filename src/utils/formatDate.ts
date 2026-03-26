export function formatDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";

  // Si es solo un año "2023"
  if (/^\d{4}$/.test(dateStr)) return dateStr;

  // Si tiene formato YYYY-MM
  if (/^\d{4}-\d{2}$/.test(dateStr)) {
    const [year, month] = dateStr.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("es-ES", { month: "long", year: "numeric" });
  }

  // Si es fecha completa YYYY-MM-DD
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (e) {
    return dateStr;
  }
}
