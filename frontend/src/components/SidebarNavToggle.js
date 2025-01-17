import React from "react";
import { Button } from "@aws-amplify/ui-react";
import { MdMenu, MdMenuOpen } from "react-icons/md";

interface NavToggleProps {
    expand?: boolean;
    onChange?: () => void;
  }

export default function SidebarNavToggle({ expand, onChange }: NavToggleProps) {
    return (
        <>
          <Button
            size="small"
            variation="menu"
            onClick={onChange}
            className={expand ? "expaned" : ""}
            fontSize="20px"
            height="40px"
          >
            {expand ? <MdMenuOpen /> : <MdMenu />}
          </Button>
        </>
      );
};