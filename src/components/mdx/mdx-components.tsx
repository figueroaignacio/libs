// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H1, H2, H3, H4, H5, H6 } from "./heading";
import { InlineCode } from "./inline-code";
import { Table, TableCell, TableHeader, TableRow } from "./table";
import {
  HorizontalRule,
  Link,
  ListItem,
  OrderedList,
  Paragraph,
  Pre,
  UnorderedList,
} from "./typography";

export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: Link,
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  code: InlineCode,
  pre: Pre,
  hr: HorizontalRule,
  table: Table,
  tr: TableRow,
  th: TableHeader,
  td: TableCell,
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
};
