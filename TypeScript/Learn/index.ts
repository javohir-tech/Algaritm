// Awaited - asinxron funksiyalarda

async function getFetch(): Promise<string> {
  return "Data";
}

type TypeFetchData = Awaited<ReturnType<typeof getFetch>>;

const example: TypeFetchData = 'whats app guy'
