import {
  ActionPanel,
  List,
  Action,
  BrowserExtension,
  Icon,
} from "@raycast/api";
import { usePromise } from "@raycast/utils";

const tabToMarkdown = (tab: BrowserExtension.Tab) =>
  `[${tab.title ?? "(untitled)"}](${tab.url})`;

const tabToHtml = (tab: BrowserExtension.Tab) =>
  `<a href="${tab.url}">${tab.title ?? "(untitled)"}</a>`;

export default function CopyBrowserTab() {
  return (
    <List.Item
      title="Copy Browser Tab"
      subtitle="Copy the current browser tab to the clipboard"
      icon={Icon.Link}
      actions={
        <ActionPanel>
          <Action.Push title="Copy Browser Tab" target={<Command />} />
        </ActionPanel>
      }
    />
  );
}

function Command() {
  const { data: tabs, isLoading } = usePromise(async () => {
    const tabs = await BrowserExtension.getTabs();
    return tabs.sort((a, b) => {
      if (a.active) return -1;
      if (b.active) return 1;
      return 0;
    });
  });

  return (
    <List isLoading={isLoading}>
      {tabs?.map((tab) => (
        <List.Item
          key={tab.id}
          title={tab.title ?? "(untitled)"}
          subtitle={tab.url}
          icon={tab.favicon}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard
                title="Copy as Markdown"
                content={{ text: tabToMarkdown(tab) }}
              />
              <Action.CopyToClipboard
                // eslint-disable-next-line @raycast/prefer-title-case
                title="Copy as HTML"
                content={{ text: tabToHtml(tab) }}
              />
              <Action.CopyToClipboard
                title="Copy as Rich Text"
                content={{ html: tabToHtml(tab) }}
              />
              <Action.CopyToClipboard
                title="Copy Title"
                content={{ text: tab.title ?? "(untitled)" }}
              />
              <Action.CopyToClipboard
                title="Copy URL"
                content={{ text: tab.url }}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
