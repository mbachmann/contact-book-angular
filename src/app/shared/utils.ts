

var isoDateFormat =
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

export function parseIsoDateStrToDate(value: any) {
  if (typeof value === 'string' && isoDateFormat.test(value)) {
    return new Date(value);
  }
  return value;
}

export function activateTooltip() {
  // $('[data-bs-toggle="tooltip"]').tooltip();

}

export function isValidImageType(type: string): boolean {
  return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
}

export function checkImageSize(imageBase64: string, minPixels: number, maxPixels: number): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    let originalImage = new Image();
    originalImage.onload = () => {
      let width = originalImage.naturalWidth;
      let height = originalImage.naturalHeight;
      if (minPixels < width || minPixels < height || maxPixels > width || maxPixels > height) resolve(false);
      else resolve(true);
    }
    originalImage.onerror = reject;
    originalImage.src = imageBase64;
  });
}
