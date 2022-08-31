import { expect } from 'chai'
import { parseCsvImperative , parseCsvFunctional , pullAndAnalyzeCsv } from '../src/ex4-ex5.js'

describe('ex. 4', function () {
  const csvText = [
    'svn_id,real_name,web_site,project_name',
    'aadamchik,Andrus Adamchik,,apsite',
    'aaron,Aaron Bannert,http://www.clove.org/~aaron/,apr'
  ].join('\n')

  for (const implementation of [parseCsvImperative, parseCsvFunctional]) {
    describe(`${implementation.name}(csvText)`, function () {
      it('should ignore the header line', function () {
        expect(implementation(csvText).length).to.eq(2)
      })

      it('should have [username, realName, website, projectName] on each contribution', function () {
        const result = implementation(csvText)
        expect(Object.keys(result[0])).to.have.members(['username', 'realName', 'website', 'projectName'])
        expect(Object.keys(result[1])).to.have.members(['username', 'realName', 'website', 'projectName'])
      })

      it('should parse username, realName and projectName', function () {
        const result = implementation(csvText)
        expect(result[result.length - 2].username).to.eq('aadamchik')
        expect(result[result.length - 2].realName).to.eq('Andrus Adamchik')
        expect(result[result.length - 2].projectName).to.eq('apsite')
        expect(result[result.length - 1].username).to.eq('aaron')
        expect(result[result.length - 1].realName).to.eq('Aaron Bannert')
        expect(result[result.length - 1].projectName).to.eq('apr')
      })

      it('should set website to null if not provided', function () {
        const result = implementation(csvText)
        expect(result[result.length - 2].website).to.be.null
        expect(result[result.length - 1].website).to.be.string
      })
    })
  }
})

describe('ex. 5', function () {
  describe('pullAndAnalyzeCsv()', function () {
    it('should compute various statistics about contributors', async function () {
      const stats = await pullAndAnalyzeCsv()
      console.log(stats)
      expect(stats.firstProjectNameInAlphaOrder).to.eq('abdera')
      expect(stats.numberOfUniqContributors).to.eq(4595)
      expect(stats.averageContributorNameLength.toFixed(2)).to.eq('14.13')
      expect(stats.mostActiveContributorName).to.eq('Jim Jagielski')
      expect(stats.top10MostConstributedProjects).to.deep.eq([
        'incubator',
        'Apache Software Foundation',
        'member',
        'apsite',
        'ws',
        'incubator-pmc',
        'pmc-chairs',
        'openoffice',
        'httpd',
        'commons'
      ])
    })
  })
}) 

