const KEY = "Local store range";

const LocalSer = {
  setLocal(value) {
    const localString = JSON.stringify(value);
    localStorage.setItem(KEY, localString);
  },
  getLocal() {
    const localValue = localStorage.getItem(KEY);
    return JSON.parse(localValue);
  },
  deleLocal() {
    if (!!this.getLocal()) {
      localStorage.removeItem(KEY);
      alert("bạn đã xóa dữ liệu")
    } else {
      alert("không còn dữ liệu để lưu trữ");
    }
  },
};

export default LocalSer;
