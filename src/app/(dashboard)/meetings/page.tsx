import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";
import { MeetingsView, MeetingsViewError, MeetingsViewLoading } from "@/modules/meetings/ui/views/meetings-view";

const Page = () => {
	const queryClient = getQueryClient();
	void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}));

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Suspense fallback={<MeetingsViewLoading />}>
				<ErrorBoundary fallback={<MeetingsViewError />}>
					<MeetingsView />
				</ErrorBoundary>
			</Suspense>
		</HydrationBoundary>
	);
};

export default Page;
