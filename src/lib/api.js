const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://backend.yourselfpilates.pt";

export async function fetchPacks() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/subscriptions/packs/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch packs: ${response.statusText}`);
    }

    const data = await response.json();

    return data.results.map((pack) => ({
      id: pack.id,
      name: pack.title,
      description: pack.description,
      image: pack.image,
      price: `Preço: ${parseFloat(pack.price).toFixed(2)}€`,
      link: "/agendar-espaco",
    }));
  } catch (error) {
    console.error("Error fetching packs:", error);
    throw error;
  }
}
