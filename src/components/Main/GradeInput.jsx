export default function GradeInput() {
  function search(formData) {
    const gradeInput = formData.get("gradeInput");
    alert(`You searched for '${gradeInput}'`);
  }
  return (
    <form action={search}>
      <input type="text" name="gradeInput" placeholder="학점 입력" />
      <button type="submit">검색</button>
    </form>
  );
}
