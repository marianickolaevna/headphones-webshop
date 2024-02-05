export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-31";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "77113cbg";

export const useCdn = false;

function assertValue(v, errorMessage) {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
