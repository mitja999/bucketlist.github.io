export class Location {
    id: string;
    name: string;
    constructor() {
        this.id = "";
        this.name = "";
    }
}

export class Bucket {
    id: string;
    name: string;
    location: Location;
    constructor() {
        this.id = "";
        this.name = "";
        this.location = new Location();
    }
}

export class NewBucket {
    name: string;
    location: string;
    constructor() {
    }
}

export class NewBucketObject {
    bucket: string;
    file: File;
    constructor(bucketId: string, file: File) {
        this.bucket = bucketId;
        this.file = file;
    }
}

export class BucketObject {
    name: string;
    last_modified: string;
    size: number;
    constructor() {
    }
}

export class ResponseStatus {
    code: number;
    message: string;
    constructor(code, message) {
        this.code = code; this.message = message;
    }
}