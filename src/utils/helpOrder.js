// Shared ordering for help/docs articles.
// Categories are alphabetical; within a category, `order` wins, then title.
// Used by the sidebar and by prev/next pagination so both always match.
export function orderHelpEntries(entries) {
    return [...entries].sort((a, b) => {
        const category = a.id.split("/")[0].localeCompare(b.id.split("/")[0]);
        if (category !== 0) return category;
        const order = a.data.order - b.data.order;
        if (order !== 0) return order;
        return a.data.title.localeCompare(b.data.title);
    });
}
