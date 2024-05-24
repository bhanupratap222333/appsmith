export default {


  "aggregate": [
    {
      "$match": {
        "status": "completed"
      }
    },
    {
      "$count": "completedCount"
    }
  ]


}
