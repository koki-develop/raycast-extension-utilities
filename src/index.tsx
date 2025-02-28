import { ActionPanel, Icon, List } from "@raycast/api";
import CopyBrowserTab from "./commands/copy-browser-tab";
import OpenWithSakuraChecker from "./commands/open-with-sakura-checker";
import { ReactNode } from "react";

export default function Command() {
  return (
    <List>
      <CopyBrowserTab />
      <OpenWithSakuraChecker />
    </List>
  );
}

type SubCommandProps = {
  title: string;
  subtitle: string;
  icon: Icon;
  action: ReactNode;
};

export function SubCommand({ title, subtitle, icon, action }: SubCommandProps) {
  return (
    <List.Item
      title={title}
      subtitle={subtitle}
      icon={icon}
      actions={<ActionPanel>{action}</ActionPanel>}
    />
  );
}
