export default function* LangYields (chain) {
  for (const value of chain) {
    yield value;
  }
}
