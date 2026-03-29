import axios from "axios";
import { ref } from "vue";

export default function useFetch<T>(apiUrl: string) {
  const loading = ref<boolean>(false);
  const data = ref<T | null>(null);
  const err = ref<null | string>(null);

  const getData = async() => {
    loading.value = true;
    try {
      const response = await axios(apiUrl);
      console.log(response);
      data.value = response.data;
    } catch (error) {
      err.value = "fetch error";
    } finally { 
      loading.value = false;
    }
  }

  return { loading, data, err, getData };
}
