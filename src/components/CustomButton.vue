<template>
  <button :disabled="isDisabled">{{ buttonText }}</button>
</template>

<script>
import "@/assets/css/main.css";
export default {
  name: "CustomButton",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
 
};
</script>

<style scoped>
button {
  cursor: pointer;
  width: 318px;
  height: 36px;
  padding: 10px 20px;
  font-family: 'Quicksand';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 1px 1px 4px 0px #f1e7ff inset, 2px 2px 7px 0px rgba(11, 10, 13, 0.44);
  margin: 0 0 21px 0;
  transition: background-color 0.3s;
  background: linear-gradient(230.15deg, #9580FF 0%, #A361FF 92.48%);
}

button:hover {
  background: linear-gradient(230.15deg, #9580FF 0%, #BD91FC 92.48%);
}

button:active {
  background: linear-gradient(90deg, #7930DE 0%, #7F65FF 100%);
}

button:disabled {
  background: #B0AEB9;
  cursor: not-allowed;
}
</style>
