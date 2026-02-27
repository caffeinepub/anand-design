import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { Category, type Notification } from '../backend';

export { Category };

export function useGetAllNotifications() {
    const { actor, isFetching } = useActor();

    return useQuery<Notification[]>({
        queryKey: ['notifications'],
        queryFn: async () => {
            if (!actor) return [];
            const results = await actor.getAllNotifications();
            // Sort newest first (backend returns oldest first)
            return [...results].sort((a, b) =>
                Number(b.datePosted - a.datePosted)
            );
        },
        enabled: !!actor && !isFetching,
    });
}

export function useAddNotification() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
            title,
            description,
            category,
        }: {
            title: string;
            description: string;
            category: Category;
        }) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.addNotification(title, description, category);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
        },
    });
}

export function useDeleteNotification() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (id: bigint) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.deleteNotification(id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notifications'] });
        },
    });
}
