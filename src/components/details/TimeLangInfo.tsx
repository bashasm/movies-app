function TimeLangInfo({ runtime, release_date, lang }) {
  return (
    <div>
      {runtime}mins / {release_date} / {lang}
    </div>
  );
}

export default TimeLangInfo;
