import { create } from "zustand";

interface CursorState {
  isHovering: boolean;
  setIsHover: (isIt: boolean) => void;
}

const cursorStore = create<CursorState>((set) => ({
  isHovering: false,
  setIsHover: (isIt: boolean) => set(() => ({ isHovering: isIt })),
}));

export const useCursorStore = () => {
  const state = cursorStore();
  return {
    isHovering: state.isHovering,
    setIsHover: (isIt: boolean) => state.setIsHover(isIt),
  };
};

interface RouterState {
  currentPage: "circle" | "inner" | "stairs";
  currentSubPage: string;
  setRoute: ({
    currentPage,
    currentSubPage,
  }: {
    currentPage: string | null;
    currentSubPage: string | null;
  }) => void;
}

const routerStore = create<RouterState>((set) => ({
  currentPage: "stairs",
  currentSubPage: "home",
  setRoute: ({ currentPage, currentSubPage }) => {
    set((state) => ({
      currentPage:
        (currentPage as RouterState["currentPage"]) || state.currentPage,
      currentSubPage: currentSubPage || state.currentSubPage,
    }));
  },
}));

export const useRouterStore = () => {
  const state = routerStore();
  return {
    currentPage: state.currentPage,
    currentSubPage: state.currentSubPage,
    setRoute: (params: {
      currentPage: string | null;
      currentSubPage: string | null;
    }) => state.setRoute(params),
  };
};
