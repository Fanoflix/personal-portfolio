import { ref, shallowRef } from "vue";
import type { Ref } from "vue";
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export const useAxios = (url: string, config: AxiosRequestConfig = {}) => {
  const data = ref(null);
  const response: Ref<AxiosResponse | null> = ref(null);
  const isLoading = ref(false);
  const isFinished = ref(false);
  const aborted = ref(false);
  const error: Ref<Error | unknown | null> = ref(null);

  // todo
  // const abort = (message) => {
  //   if (isFinished.value || !isLoading.value) return;
  // };

  const loading = (loading: boolean) => {
    isLoading.value = loading;
    isFinished.value = !loading;
  };

  const fetch = async () => {
    loading(true);
    try {
      const apiResponse = await axios.request({
        url,
        ...config,
      });
      response.value = apiResponse;
      data.value = apiResponse.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading(false);
    }
  };

  fetch();
  return { response, data, error, isLoading, isFinished, fetch };
};
