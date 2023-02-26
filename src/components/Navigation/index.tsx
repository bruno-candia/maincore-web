import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDown } from "phosphor-react";
import { Navbar } from "./styles";

interface NavigationProps {
  textTranslated: (key: string) => string;
}

export function Navigation({ textTranslated }: NavigationProps) {
  return (
    <Navbar>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              className="NavigationMenuTrigger"
              style={{ cursor: "pointer" }}
            >
              {textTranslated("product")}
              <CaretDown size={16} aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <li>
                  <NavigationMenu.Link asChild>
                    <a className={`ListItemLink`} href="/vega">
                      <div className="ListItemHeading">Maincore Vega</div>
                      <p className="ListItemText">
                        {textTranslated("vega-description")}
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link asChild>
                    <a className={`ListItemLink`} href="/sirius">
                      <div className="ListItemHeading">Maincore Sirius</div>
                      <p className="ListItemText">
                        {textTranslated("sirius-description")}
                      </p>
                    </a>
                  </NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="NavigationMenuLink"
              href="/resources"
            >
              {textTranslated("resources")}
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </Navbar>
  );
}
