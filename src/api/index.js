export const fetchFlightData = async (queryParams) => {
  const apiUrl = import.meta.env.VITE_BASE_URL + "/api/v1/flights/searchFlights";
  const apiKey = import.meta.env.VITE_RAPID_API_KEY;
  const apiHost = import.meta.env.VITE_RAPID_API_HOST;

  // Filter out null or undefined query parameters
  const filteredParams = Object.fromEntries(
    Object.entries(queryParams).filter(([_, value]) => value != null)
  );
  const searchParams = new URLSearchParams(filteredParams);

  try {
    const response = await fetch(`${apiUrl}?${searchParams.toString()}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching flight data: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch flight data:", error);
    throw error;
  }
};
