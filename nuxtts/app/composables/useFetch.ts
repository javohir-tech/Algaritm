import axios from "axios";

export default function useFetch<T>(apiUrl: string) {
  const loading = ref<boolean>(true);
  const data = ref<T[]>([]);
  const err = ref<string | null>(null);

  async function getData() {
    loading.value = true;
    try {
      const { data: userData } = await axios.get(apiUrl);
      data.value = userData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        err.value = error.response?.data?.message ?? error.message;
      } else {
        err.value = "No'malum Hatolik";
      }
    } finally {
      loading.value = false;
    }
  }
  return { loading, data, err, getData };
}
