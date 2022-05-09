import { useEffect, useRef, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

const Drawer = () => {
  const [open, setOpen] = useState(true);
  const focusRef = useRef();

  useEffect(() => {
    // Setting focus is to aid keyboard and screen reader nav when activating this iframe
    focusRef.current.focus();
  }, []);

  return (
    <p>
      obas
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        ref={focusRef}
      >
        {open ? "Close" : "Open"}
      </button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={false}
        header={
          <input
            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0"
            type="text"
            placeholder="Text input field in a sticky header"
          />
        }
        snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]}
      >
        <p>
          it's possible to use the Bottom Sheet as an height adjustable
          sidebar/panel.
        </p>
        <p>You can combine this wito fine-tune the behavior you want.</p>
      </BottomSheet>
    </p>
  );
};

export default Drawer;
