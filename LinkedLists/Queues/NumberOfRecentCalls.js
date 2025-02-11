class RecentCounter {
    constructor() {
        this.numOfRequests = 0
    }

    ping(t) {
        this.numOfRequests++;
        return this.numOfRequests;
    }
}