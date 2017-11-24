const fuck = ({ id, deleted }) => ({
  id: Number(id),
  deleted: Boolean(deleted),
});

const test = fuck({ id: "142", deleted: "true" });

console.log({ id: "142", deleted: "true" });
