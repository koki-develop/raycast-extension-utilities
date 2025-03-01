import { Action, ActionPanel, Icon, List } from "@raycast/api";
import { SubCommand } from "..";

type Item = {
  name: string;
  url: string;
};

const items: Item[] = [
  {
    name: "Amazon CloudFront",
    url: "https://console.aws.amazon.com/cloudfront",
  },
  {
    name: "Amazon S3",
    url: "https://console.aws.amazon.com/s3",
  },
  {
    name: "Amazon Route53",
    url: "https://console.aws.amazon.com/route53",
  },
];

export default function AWSManagementConsoleLinks() {
  return (
    <SubCommand
      title="AWS Management Console Links"
      subtitle="Open AWS Management Console"
      icon={Icon.Cloud}
      action={<Action.Push title="Select" target={<Command />} />}
    />
  );
}

function Command() {
  return (
    <List>
      {items.map((item) => (
        <List.Item
          key={item.name}
          title={item.name}
          subtitle={item.url}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser title="Open in Browser" url={item.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
