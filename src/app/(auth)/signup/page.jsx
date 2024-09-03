import TextField from "@/ui/TextField";

export const metadata = {
  title: "ثبت نام",
};

function Signup() {
  return (
    <div>
      <h1>ثبت نام</h1>
      <form>
        <TextField name="name" label="نام و نام خانوادگی" isRequired />
      </form>
    </div>
  );
}

export default Signup;
