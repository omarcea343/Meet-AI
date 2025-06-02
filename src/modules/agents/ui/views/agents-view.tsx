"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { EmptyState } from "@/components/empty-state";
import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";

import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { columns } from "../components/columns";
import { DataTable } from "../components/data-table";
import { DataPagination } from "../components/data-pagination";

export const AgentsView = () => {
	const [filters, setFilters] = useAgentsFilters();

	const trpc = useTRPC();
	const { data } = useSuspenseQuery(
		trpc.agents.getMany.queryOptions({
			...filters,
		})
	);

	return (
		<div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
			<DataTable columns={columns} data={data.items} />
			<DataPagination
				page={filters.page}
				totalPages={data.totalPages}
				onPageChange={(page) => setFilters({ page })}
			/>
			{data.items.length === 0 && (
				<EmptyState
					title="Create your first agent"
					description="Create an agent to join your meetings. Each agent will follow your instructions an can interact with participants during the call."
				/>
			)}
		</div>
	);
};

export const AgentsViewLoading = () => {
	return <LoadingState title="Loading Agents" description="Please wait this may take a few seconds..." />;
};

export const AgentsViewError = () => {
	return <ErrorState title="Error Loading Agents" description="Something went wrong, please try again later." />;
};
