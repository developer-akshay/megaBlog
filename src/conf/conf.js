const conf={
    appwriteUrl:string(import.meta.env.VITE_APPWRITE_URL),
    projectId:string(import.meta.env.PROJECT_ID),
    databaseId:string(import.meta.env.DATABASE_ID),
    collectionId:string(import.meta.env.COLLECTION_ID),
    bucketId:string(import.meta.env.BUCKET_ID),
}

export default conf


