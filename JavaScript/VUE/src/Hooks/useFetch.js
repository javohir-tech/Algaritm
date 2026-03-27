import axios from "axios";
import { ref } from "vue";

export const useFetch = (apiUrl) => {
    const data = ref([])
    const loading = ref(false)
    const error = ref(null)

    async function getData() {
        loading.value = true
        try {
            const response = await axios.get(apiUrl)
            data.value = response.data
        } catch (err) {
            error.value = err.response || err
        } finally {
            loading.value = false
        }
    }

    return { data, loading, error, getData }

}