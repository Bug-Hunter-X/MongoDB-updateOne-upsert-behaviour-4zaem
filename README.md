# MongoDB updateOne Upsert Bug

This repository demonstrates a common error in MongoDB's `updateOne` operation when using the `upsert` option. The bug involves unintended insertion of documents instead of updates when a matching document is not found.

## Bug Description
The original code uses `updateOne` with `upsert: true`. The intention is to either update an existing document matching the query or insert a new one if no match is found. However, due to the structure of the update operation, an incorrect document is unexpectedly inserted when no match exists.

## Solution
The solution involves carefully constructing the update operation to ensure that if a new document is created by `upsert`, it contains the correct data.
