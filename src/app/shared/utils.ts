

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

export function getNaturalImageSize(imageBase64: string, minPixels: number, maxPixels: number): Promise<boolean> {
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

/**
 * Extract the MIME type from a base64 string
 * @param base64Data Base64 string
 * @return MIME type string
 */
export function extractMimeType(base64Data: string): string {
   return base64Data.substring("data:".length, base64Data.indexOf(";base64"))
}
export function kByteSize(base64String: string): string {
  return formatAsKBytes(size(base64String));
}

export function byteSize(base64String: string): string {
  return formatAsBytes(size(base64String));
}

function size(value: string): number {
  return (value.length / 4) * 3 - paddingSize(value);
}

function paddingSize(value: string): number {
  if (endsWith('==', value)) {
    return 2;
  }
  if (endsWith('=', value)) {
    return 1;
  }
  return 0;
}

function endsWith(suffix: string, str: string): boolean {
  return str.includes(suffix, str.length - suffix.length);
}

function formatAsBytes(size: number): string {
  return Math.round(size).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
}

function formatAsKBytes(size: number): string {
  return Math.round(size/1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' kB';
}
