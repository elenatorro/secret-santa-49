import { ICategories, ECategories } from '@/types/categories/categories'

describe('Category Types', () => {
  it('should have all the categories', () => {
    expect(ECategories.Color).toBeTruthy()
    expect(ECategories.Day).toBeTruthy()
    expect(ECategories.Friend).toBeTruthy()
    expect(ECategories.Note).toBeTruthy()
    expect(ECategories.Present).toBeTruthy()
    expect(ECategories.Sin).toBeTruthy()
    expect(ECategories.Tattoo).toBeTruthy()
  })

  it('should have all the categories', () => {
    const category = {
      color: 'blue',
      day: 'wednesday',
      friend: 'Alice',
      note: 'C',
      present: 'smart-watch',
      sin: 'lust',
      tattoo: 'seven'
    } as ICategories

    expect('color' in category).toBeTruthy()
    expect('day' in category).toBeTruthy()
    expect('friend' in category).toBeTruthy()
    expect('note' in category).toBeTruthy()
    expect('present' in category).toBeTruthy()
    expect('sin' in category).toBeTruthy()
    expect('tattoo' in category).toBeTruthy()
  })
})
