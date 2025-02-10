import toast from "react-hot-toast";

export const showSuccesMessage = () => {
  toast("Request Success! but we can't modify the backend as it's a fake API", {
    duration: 4000,
    position: "top-right",
    icon: "👏",
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
};
