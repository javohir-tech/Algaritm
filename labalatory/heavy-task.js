self.onmessage = (e) => {
    let result = 0
    for (let i = 0; i < 1_000_000_000; i++) {
        result +=  i
    }

    self.postMessage(result)
}