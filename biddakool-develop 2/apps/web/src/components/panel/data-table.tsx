"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Inbox,
  CircleAlert,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { usePanel } from "./provider";
import { filterRows } from "@/lib/panel/logic";
export type Column<T> = { label: string; render: (row: T) => ReactNode };
export type ViewState = "Ready" | "Loading" | "Empty" | "Error";
export function StateMenu({ onChange }: { onChange: (state: ViewState) => void }) {
  const { t } = usePanel();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title={t("Preview states")}
          aria-label={t("Preview states")}
        >
          <SlidersHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("Preview states")}</DropdownMenuLabel>
        {(["Ready", "Loading", "Empty", "Error"] as const).map((state) => (
          <DropdownMenuItem key={state} onSelect={() => onChange(state)}>
            {t(state)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export function ListState({ state, retry }: { state: ViewState; retry: () => void }) {
  const { t } = usePanel();
  if (state === "Loading")
    return (
      <div className="panel-skeleton" role="status" aria-label={t("Loading")}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} />
        ))}
      </div>
    );
  return (
    <div className="table-state" role={state === "Error" ? "alert" : "status"}>
      {state === "Error" ? <CircleAlert /> : <Inbox />}
      <h3>{t(state === "Error" ? "Unable to load records" : "No records found")}</h3>
      <p>{t(state === "Error" ? "Please try again." : "Try another search or filter.")}</p>
      {state === "Error" && (
        <Button variant="outline" onClick={retry}>
          <RotateCcw />
          {t("Retry")}
        </Button>
      )}
    </div>
  );
}
export function DataTable<T extends { id: string }>({
  rows,
  columns,
  searchText,
  filter,
  initialSearch = "",
  pageSize = 6,
}: {
  rows: T[];
  columns: Column<T>[];
  searchText: (row: T) => string;
  filter?: { label: string; value: (row: T) => string; options: string[] };
  initialSearch?: string;
  pageSize?: number;
}) {
  const { t } = usePanel();
  const [search, setSearch] = useState(initialSearch);
  const [selected, setSelected] = useState("All");
  const [page, setPage] = useState(1);
  const [state, setState] = useState<ViewState>("Loading");
  useEffect(() => {
    const timer = setTimeout(() => setState("Ready"), 260);
    return () => clearTimeout(timer);
  }, []);
  // Reset search/pagination when initialSearch changes (adjust-during-render
  // pattern; see https://react.dev/learn/you-might-not-need-an-effect).
  const [prevInitialSearch, setPrevInitialSearch] = useState(initialSearch);
  if (prevInitialSearch !== initialSearch) {
    setPrevInitialSearch(initialSearch);
    setSearch(initialSearch);
    setPage(1);
  }
  const filtered = filterRows(rows, search, searchText).filter(
    (row) => !filter || selected === "All" || filter.value(row) === selected,
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);
  const displayState = state === "Ready" && filtered.length === 0 ? "Empty" : state;
  return (
    <div className="panel-table-region">
      <div className="table-toolbar">
        <div className="table-search">
          <Search size={16} />
          <Input
            aria-label={t("Search records…")}
            placeholder={t("Search records…")}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
          />
        </div>
        <div className="table-toolbar-right">
          {filter && (
            <select
              aria-label={t(filter.label)}
              value={selected}
              onChange={(event) => {
                setSelected(event.target.value);
                setPage(1);
              }}
            >
              <option value="All">{t(filter.label)}</option>
              {filter.options.map((option) => (
                <option value={option} key={option}>
                  {t(option)}
                </option>
              ))}
            </select>
          )}
          <StateMenu onChange={setState} />
        </div>
      </div>
      {displayState !== "Ready" ? (
        <ListState state={displayState} retry={() => setState("Ready")} />
      ) : (
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.label}>{t(column.label)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map((row) => (
                <tr key={row.id}>
                  {columns.map((column) => (
                    <td key={column.label}>{column.render(row)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="table-pagination">
        <span>
          {displayState === "Empty" ? 0 : filtered.length} {t("records")}
        </span>
        <div>
          <span>
            {t("Page")} {safePage} {t("of")} {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            aria-label={t("Previous page")}
            disabled={safePage === 1 || displayState !== "Ready"}
            onClick={() => setPage(safePage - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            aria-label={t("Next page")}
            disabled={safePage === totalPages || displayState !== "Ready"}
            onClick={() => setPage(safePage + 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
export function StatusBadge({ value }: { value: string }) {
  const { t } = usePanel();
  return (
    <span className={`status-badge status-${value.toLowerCase().replaceAll(" ", "-")}`}>
      <i />
      {t(value)}
    </span>
  );
}
export function Person({ name, id }: { name: string; id?: string }) {
  return (
    <span className="table-person">
      <span className="person-avatar">
        {name
          .split(" ")
          .slice(0, 2)
          .map((part) => part[0])
          .join("")}
      </span>
      <span>
        <strong>{name}</strong>
        {id && <small>{id}</small>}
      </span>
    </span>
  );
}
