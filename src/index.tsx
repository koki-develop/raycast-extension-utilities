import { List } from "@raycast/api";
import CopyBrowserTab from "./commands/copy-browser-tab";
import OpenWithSakuraChecker from "./commands/open-with-sakura-checker";

export default function Command() {
  return (
    <List>
      <CopyBrowserTab />
      <OpenWithSakuraChecker />
    </List>
  );
}
