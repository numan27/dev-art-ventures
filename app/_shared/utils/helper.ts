"use client";
// import { resetAuthReducer } from "redux/reducers/authSlice";
// import { store } from "redux/store";
import { routeConstant } from "routes/constants";
import { SUPPORTED_FORMATS } from "./enum";

function normalizePath(path: string): string {
  return path.split("?")[0].replace(/\/$/, "");
}

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}

function isImage(filetype: string): boolean {
  if (SUPPORTED_FORMATS.includes(filetype)) {
    return true;
  } else {
    return false;
  }
}

function findScreenTitle(pathname: string): string {
  const normalizedPath = normalizePath(pathname);

  // First, check direct routes
  const directRoute = Object.values(routeConstant).find(
    (item: any) =>
      item &&
      typeof item === "object" &&
      "path" in item &&
      item.path === normalizedPath
  );

  if (
    directRoute &&
    typeof directRoute === "object" &&
    "title" in directRoute
  ) {
    return (directRoute as any).title || "Untitled";
  }

  // Then, check nested routes (like ventures)
  for (const [key, value] of Object.entries(routeConstant)) {
    if (typeof value === "object" && value !== null && !("path" in value)) {
      // This is a nested object like ventures
      const nestedRoute = Object.values(value as any).find(
        (item: any) =>
          item &&
          typeof item === "object" &&
          "path" in item &&
          item.path === normalizedPath
      );
      if (
        nestedRoute &&
        typeof nestedRoute === "object" &&
        "title" in nestedRoute
      ) {
        return (nestedRoute as any).title || "Untitled";
      }
    }
  }

  console.warn(`No matching route found for pathname: ${normalizedPath}`);
  return "";
}

// const resetRedux = () => {
//   const { auth }: any = store.getState().root;
//   if (auth?.token) {
//     store.dispatch(resetAuthReducer());
//     if (document) {
//       document.cookie.split(";").forEach(function (c) {
//         document.cookie = c
//           .replace(/^ +/, "")
//           .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
//       });
//     }
//   }
// };

function getTopPosition(divElement: HTMLElement) {
  const rect = divElement.getBoundingClientRect();
  const top = rect.top - document.documentElement.clientTop;
  return top;
}

function getLeftPosition(divElement: HTMLElement) {
  const rect = divElement.getBoundingClientRect();
  const left = rect.left - document.documentElement.clientLeft;
  return left;
}

export {
  findScreenTitle,
  getLeftPosition,
  getTopPosition,
  getWindowDimensions,
  isImage,
  // resetRedux,
};
