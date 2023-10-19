export const heightConverter = (totalInches: number) => {

    const feet = Math.floor(totalInches/12)
    const inches = totalInches % 12

    const height = feet + "'" + inches

    return height
}