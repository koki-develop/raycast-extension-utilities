import { List } from "@raycast/api";
import CopyBrowserTab from "./copy-browser-tab";
import OpenWithSakuraChecker from "./open-with-sakura-checker";

export default function Command() {
  return (
    <List>
      <CopyBrowserTab />
      <OpenWithSakuraChecker />
    </List>
  );
}
