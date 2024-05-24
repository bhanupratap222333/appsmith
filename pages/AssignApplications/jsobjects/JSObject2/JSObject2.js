export default {
  collection: "customer_data",
  updateMany: {
    filter: { _id: { $in: Table1.selectedRow } },
    update: { $set: { assignedTo: MultiSelect1.selectedOptionValues } }
  }
}
