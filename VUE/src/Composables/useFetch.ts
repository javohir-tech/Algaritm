import axios from "axios";
import { ref } from "vue";

export default function useFetch<T>(apiUrl: string) {
  const loading = ref<boolean>(false);
  const data = ref<T[]>([]);
  const err = ref<Error | null>(null);

  async function getData() {
    loading.value = true;
    try {
      const response = await axios.get<T[]>(apiUrl);
      data.value = response.data
    //   console.log(response);
    } catch (error) {
      err.value = error as Error;
    } finally {
      loading.value = false;
    }
  }

  return { loading, data, err, getData };
}
